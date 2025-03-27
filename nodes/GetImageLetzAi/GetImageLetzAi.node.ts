import {
	INodeInputConfiguration,
	INodeOutputConfiguration,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';

export class GetImageLetzAi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Get Image LetzAI',
		name: 'getImageLetzAi',
		icon: 'file:logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: 'Get Image with LetzAI',
		description: 'Get an image using the LetzAI public API.',
		defaults: {
			name: 'Get Image LetzAI default',
		},
		inputs: ['main'] as (NodeConnectionType | INodeInputConfiguration)[],
		outputs: ['main'] as (NodeConnectionType | INodeOutputConfiguration)[],

		credentials: [
			{
				name: 'letzAIApi',
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
				name: 'id',
				type: 'string',
				default: '',
				placeholder: 'ID of the image',
				required: true,
				description: 'Get the image details with the ID image',
				routing: {
					request: {
						method: 'GET',
						url: '=/{{$parameter["id"]}}',
					},
				},
			},
		],
	};
}
