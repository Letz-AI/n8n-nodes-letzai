import {
	INodeInputConfiguration,
	INodeOutputConfiguration,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class LetzAICreateImage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Create Image LetzAI',
		name: 'CreateImageLetzAI',
		icon: 'file:icon.png',
		group: ['transform'],
		version: 1,
		subtitle: 'Create Image with LetzAI',
		description: 'Create an image using the LetzAI public API.',
		defaults: {
			name: 'Create Image LetzAI default',
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
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		properties: [
			{
				displayName: 'Prompt',
				name: 'prompt',
				type: 'string',
				default: '',
				placeholder: 'Describe the image you want to generate',
				required: true,
				description: 'Prompt for image generation',
				routing: {
					request: {
						body: {
							prompt: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Width',
				name: 'width',
				type: 'number',
				default: 1600,
				placeholder: 'Min: 520, Default: 1600, Max: 2160',
				required: true,
				description: 'Image width of the image (Min: 520, Default: 1600, Max: 2160)',
				routing: {
					request: {
						body: {
							width: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Height',
				name: 'height',
				type: 'number',
				default: 1600,
				placeholder: 'Min: 520, Default: 1600, Max: 2160',
				required: true,
				description: 'Image height of the image (Min: 520, Default: 1600, Max: 2160)',
				routing: {
					request: {
						body: {
							height: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Quality',
				name: 'quality',
				type: 'number',
				default: 2,
				placeholder: 'Min: 1, Default: 2, Max: 5',
				required: true,
				description:
					'Defines how many steps the generation should take. Higher is slower, but generally better quality (Min: 1, Default: 2, Max: 5)',
				routing: {
					request: {
						body: {
							quality: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Creativity',
				name: 'creativity',
				type: 'number',
				default: 2,
				placeholder: 'Min: 1, Default: 2, Max: 5',
				required: true,
				description:
					'Defines how strictly the prompt should be respected. Higher Creativity makes the images more artificial. Lower makes it more photorealistic (Min: 1, Default: 2, Max: 5)',
				routing: {
					request: {
						body: {
							creativity: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Has Watermark?',
				name: 'hasWatermark',
				type: 'boolean',
				default: true,
				placeholder: '',
				required: true,
				description: 'Defines whether to set a watermark or not. Default is true',
				routing: {
					request: {
						body: {
							hasWatermark: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'System Version',
				name: 'systemVersion',
				type: 'number',
				default: 3,
				placeholder: '',
				required: true,
				description:
					'Allowed values: 2, 3. Use LetzAI V2, or V3 (newest). Default is the version currently selected on your account.',
				routing: {
					request: {
						body: {
							systemVersion: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				options: [
					{
						name: 'Default',
						value: 'default',
						description: 'Default is slow but high quality',
					},
					{
						name: 'Sigma',
						value: 'sigma',
						description: 'Sigma is faster and great for close ups.',
					},
					{
						name: 'Turbo',
						value: 'turbo',
						description: 'Turbo is fastest, but lower quality',
					},
				],
				default: 'default',
				description:
					'	Select one of the different modes that offer different generation settings. Allowed values: "default", "sigma", "turbo" Default is slow but high quality. Sigma is faster and great for close ups. Turbo is fastest, but lower quality.',
				routing: {
					request: {
						body: {
							mode: '={{$value}}',
						},
					},
				},
			},
		],
	};
}
