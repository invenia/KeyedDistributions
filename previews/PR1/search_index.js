var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = KeyedDistributions","category":"page"},{"location":"#KeyedDistributions","page":"Home","title":"KeyedDistributions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [KeyedDistributions]","category":"page"},{"location":"#KeyedDistributions.KeyedDistribution","page":"Home","title":"KeyedDistributions.KeyedDistribution","text":"KeyedDistribution(d<:Distributions.Distribution, keys::AbstractVector)\n\nStores keys for each variate alongside the Distributions.Distribution d.\n\n\n\n\n\n","category":"type"},{"location":"#KeyedDistributions.KeyedDistribution-Tuple{Distributions.Distribution}","page":"Home","title":"KeyedDistributions.KeyedDistribution","text":"KeyedDistribution(d::Distribution)\n\nConstructs a KeyedDistribution using keys stored in d. The keys are copied from the first axis of the first parameter in d.\n\n\n\n\n\n","category":"method"},{"location":"#KeyedDistributions.KeyedSampleable","page":"Home","title":"KeyedDistributions.KeyedSampleable","text":"KeyedSampleable(d<:Distributions.Sampleable, keys::AbstractVector)\n\nStores keys for each variate alongside the Distributions.Sampleable d.\n\n\n\n\n\n","category":"type"},{"location":"#AxisKeys.axiskeys-Tuple{Union{KeyedDistribution, KeyedSampleable}}","page":"Home","title":"AxisKeys.axiskeys","text":"axiskeys(s::Sampleable)\n\nReturn the keys for the variates of the Sampleable. For an KeyedDistribution or KeyedSampleable this is the keys it was constructed with. For any other Sampleable this is equal to 1:length(s).\n\n\n\n\n\n","category":"method"},{"location":"#KeyedDistributions.distribution-Tuple{Union{KeyedDistribution, KeyedSampleable}}","page":"Home","title":"KeyedDistributions.distribution","text":"distribution(::KeyedDistribution) -> Distribution\ndistribution(::KeyedSampleable{F, S, D}) -> D\n\nReturn the wrapped distribution.\n\n\n\n\n\n","category":"method"}]
}
