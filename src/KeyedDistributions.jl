module KeyedDistributions

using AutoHashEquals
using AxisKeys
using Distributions
using Random: AbstractRNG

export KeyedDistribution, KeyedSampleable
export axiskeys, distribution


for T in (:Distribution, :Sampleable)
    KeyedT = Symbol(:Keyed, T)
    @eval begin
        """
            $($KeyedT)(d<:$($T), keys::Tuple{Vararg{AbstractVector}})

        Stores `keys` for each variate alongside the `$($T)` `d`.

        The length of the `keys` tuple must be the number of dimensions, which is 1 for
        univariate and multivariate distributions, and 2 for matrix-variate distributions.

        The length of each vector in `keys` must match the length along each dimension.
        """
        @auto_hash_equals struct $KeyedT{F<:VariateForm, S<:ValueSupport, D<:$T{F, S}} <: $T{F, S}
            d::D
            keys::Tuple{Vararg{AbstractVector}}

            function $KeyedT(d::$T{F, S}, keys::Tuple{Vararg{AbstractVector}}) where {F, S}
                length(d) == prod(length, keys) || throw(DimensionMismatch(
                    "number of keys ($(prod(length, keys))) must match " *
                    "number of variates ($(length(d)))"))

                if F == Matrixvariate
                    map(v -> length(v), keys) == size(d) || throw(ArgumentError(
                        "lengths of key vectors must match size of distribution"))
                end

                return new{F, S, typeof(d)}(d, keys)
            end
        end

        """
            $($KeyedT)(d<:$($T), keys::AbstractVector)

        Constructor for $($KeyedT) with one dimension of variates.
        The elements of `keys` correspond to the variates of the distribution.
        """
        $KeyedT(d::$T{F, S}, keys::AbstractVector) where {F, S} = $KeyedT(d, (keys, ))
    end
end

"""
    KeyedDistribution(d::Distribution)

Constructs a [`KeyedDistribution`](@ref) using the keys of the first field stored in `d`.
"""
function KeyedDistribution(d::Distribution)
    first_field = getfield(d, 1)
    return KeyedDistribution(d, axiskeys(first_field))
end

const KeyedDistOrSampleable = Union{KeyedDistribution, KeyedSampleable}

# Access methods

"""
    distribution(::KeyedDistribution) -> Distribution
    distribution(::KeyedSampleable{F, S, D}) -> D

Return the wrapped distribution.
"""
distribution(d::KeyedDistOrSampleable) = d.d

# AxisKeys functionality

"""
    axiskeys(s::Sampleable)

Return the keys for the variates of the Sampleable.
For an [`KeyedDistribution`](@ref) or [`KeyedSampleable`](@ref) this
is the keys it was constructed with.
For any other `Sampleable` this is equal to `1:length(s)`.
"""
AxisKeys.axiskeys(d::KeyedDistOrSampleable) = d.keys

# Standard functions to overload for new Distribution and/or Sampleable
# https://juliastats.org/Distributions.jl/latest/extends/#Create-New-Samplers-and-Distributions

function Distributions._rand!(
    rng::AbstractRNG,
    d::KeyedDistOrSampleable,
    x::AbstractVector{T}
) where T<:Real
    sample = Distributions._rand!(rng, distribution(d), x)
    return KeyedArray(sample, axiskeys(d))
end

Base.length(d::KeyedDistOrSampleable) = length(distribution(d))

function Distributions.size(d::KeyedDistribution{F}) where F<:Matrixvariate
    return size(distribution(d))
end

Distributions.sampler(d::KeyedDistribution) = sampler(distribution(d))

Base.eltype(d::KeyedDistribution) = eltype(distribution(d))

Distributions._logpdf(d::KeyedDistribution, x::AbstractArray) =
    Distributions._logpdf(distribution(d), x)

# Also need to overload `rand` methods to return KeyedArrays

function Base.rand(rng::AbstractRNG, d::KeyedDistOrSampleable)
    sample = rand(rng, distribution(d))
    ndims(sample) == 0 && return sample  # univariate
    return KeyedArray(sample, axiskeys(d))
end

function Base.rand(rng::AbstractRNG, d::KeyedDistOrSampleable, n::Int)
    samples = rand(rng, distribution(d), n)
    ndims(samples) == 1 && return KeyedArray(samples, Base.OneTo(n))  # univariate
    return KeyedArray(samples, (first(axiskeys(d)), Base.OneTo(n)))
end

function Base.rand(rng::AbstractRNG, d::KeyedDistribution{F}, n::Int) where F<:Matrixvariate
    # Distributions.rand returns a vector of matrices
    samples = [KeyedArray(x, axiskeys(d)) for x in rand(rng, distribution(d), n)]
    return KeyedArray(samples, Base.OneTo(n))
end

# Statistics functions for Distribution

Distributions.mean(d::KeyedDistribution) = KeyedArray(mean(distribution(d)), axiskeys(d))

Distributions.var(d::KeyedDistribution) = KeyedArray(var(distribution(d)), axiskeys(d))

Distributions.cov(d::KeyedDistribution) =
    KeyedArray(cov(distribution(d)), (first(axiskeys(d)), first(axiskeys(d))))

Distributions.entropy(d::KeyedDistribution) = entropy(distribution(d))
Distributions.entropy(d::KeyedDistribution, b::Real) = entropy(distribution(d), b)

end
