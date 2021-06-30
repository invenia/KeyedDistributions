var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = KeyedDistributions","category":"page"},{"location":"#KeyedDistributions","page":"Home","title":"KeyedDistributions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [KeyedDistributions]","category":"page"},{"location":"#KeyedDistributions.KeyedDistribution","page":"Home","title":"KeyedDistributions.KeyedDistribution","text":"KeyedDistribution(d<:Distributions.Distribution, keys::Tuple{Vararg{AbstractVector}})\n\nStores keys for each variate alongside the Distributions.Distribution d, supporting all of the common functions of a Distributions.Distribution. Common functions that return an AbstractArray, such as rand, will return a KeyedArray with keys derived from the Distributions.Distribution.\n\nThe type of keys is restricted to be consistent with AxisKeys.jl. The length of the keys tuple must be the number of dimensions, which is 1 for univariate and multivariate distributions, and 2 for matrix-variate distributions. The length of each key vector in must match the length along each dimension.\n\n!!! Note     Some KeyedDistribution) are callable exactly like KeyedArrays. This allows you to     marginalise out certain slices for convenience but only for the distributions     that support it, like KeyedMvNormals. Also note that marginalising by a     singleton will still return a multivariate distribution`.\n\n\n\n\n\n","category":"type"},{"location":"#KeyedDistributions.KeyedDistribution-Tuple{Distributions.Distribution}","page":"Home","title":"KeyedDistributions.KeyedDistribution","text":"KeyedDistribution(d::Distribution)\n\nConstructs a KeyedDistribution using the keys of the parameter that matches size(d). If the parameter has no keys, uses 1:n for the length n of each dimension.\n\n\n\n\n\n","category":"method"},{"location":"#KeyedDistributions.KeyedDistribution-Union{Tuple{S}, Tuple{F}, Tuple{Distributions.Distribution{F, S}, AbstractVector{T} where T}} where {F, S}","page":"Home","title":"KeyedDistributions.KeyedDistribution","text":"KeyedDistribution(d<:Distributions.Distribution, keys::AbstractVector)\n\nConstructor for KeyedDistribution with one dimension of variates. The elements of keys correspond to the variates of the distribution.\n\n\n\n\n\n","category":"method"},{"location":"#KeyedDistributions.KeyedSampleable","page":"Home","title":"KeyedDistributions.KeyedSampleable","text":"KeyedSampleable(d<:Distributions.Sampleable, keys::Tuple{Vararg{AbstractVector}})\n\nStores keys for each variate alongside the Distributions.Sampleable d, supporting all of the common functions of a Distributions.Sampleable. Common functions that return an AbstractArray, such as rand, will return a KeyedArray with keys derived from the Distributions.Sampleable.\n\nThe type of keys is restricted to be consistent with AxisKeys.jl. The length of the keys tuple must be the number of dimensions, which is 1 for univariate and multivariate distributions, and 2 for matrix-variate distributions. The length of each key vector in must match the length along each dimension.\n\n!!! Note     Some KeyedSampleable) are callable exactly like KeyedArrays. This allows you to     marginalise out certain slices for convenience but only for the distributions     that support it, like KeyedMvNormals. Also note that marginalising by a     singleton will still return a multivariate distribution`.\n\n\n\n\n\n","category":"type"},{"location":"#KeyedDistributions.KeyedSampleable-Union{Tuple{S}, Tuple{F}, Tuple{Distributions.Sampleable{F, S}, AbstractVector{T} where T}} where {F, S}","page":"Home","title":"KeyedDistributions.KeyedSampleable","text":"KeyedSampleable(d<:Distributions.Sampleable, keys::AbstractVector)\n\nConstructor for KeyedSampleable with one dimension of variates. The elements of keys correspond to the variates of the distribution.\n\n\n\n\n\n","category":"method"},{"location":"#AxisKeys.axiskeys-Tuple{Union{KeyedDistribution, KeyedSampleable}}","page":"Home","title":"AxisKeys.axiskeys","text":"axiskeys(d::Union{KeyedDistribution, KeyedSampleable})\n\nReturn the keys for the variates of the KeyedDistribution or KeyedSampleable.\n\n\n\n\n\n","category":"method"},{"location":"#KeyedDistributions.distribution-Tuple{Union{KeyedDistribution, KeyedSampleable}}","page":"Home","title":"KeyedDistributions.distribution","text":"distribution(::KeyedDistribution) -> Distribution\ndistribution(::KeyedSampleable{F, S, D}) -> D\n\nReturn the wrapped distribution.\n\n\n\n\n\n","category":"method"}]
}
