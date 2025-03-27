import {
	INodeInputConfiguration,
	INodeOutputConfiguration,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class LetzAIGetImage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Get Image LetzAI',
		name: 'GetImageLetzAI',
		icon: 'file:logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: 'Get Image with LetzAI',
		description: 'Get an image using the LetzAI public API.',
		defaults: {
			name: 'Get Image LetzAI default',
		},
		inputs: [
			{
				name: 'main',
				type: 'main',
			} as INodeInputConfiguration,
		],
		outputs: [
			{
				name: 'main',
				type: 'main',
			} as INodeOutputConfiguration,
		],
		credentials: [
			{
				name: 'LetzAIApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.letz.ai/images',
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		properties: [
			{
				displayName: 'Image ID',
				name: 'imageId',
				type: 'string',
				default: '',
				placeholder: 'ID of the image',
				required: true,
				description: 'Get the image details with the id image',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{$parameter["imageId"]}}',
					},
				},
			},
		],
	};
}
