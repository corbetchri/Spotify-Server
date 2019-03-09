import * as chroma from 'chroma-js';

export class TrackFeatures {
	static FeatureTypes = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];

	id:string;
	featureToPercent:{} = {};

	constructor(objectModel:{}) {
		this.id = objectModel['id'];
		TrackFeatures.FeatureTypes.forEach((key) => {
			this.featureToPercent[key] = objectModel[key];
		});
	}

	color(featureKey:string) {
		//TODO: use chroma library to mix two colors according to the percent value for the feature.
		//Use the featureToPercent dictionary to look up the percent value for the feature.
		return '#ffffff';
	}

	percent(feature:string) {
		return (this.featureToPercent[feature]*100).toFixed() + '%';
	}
}
