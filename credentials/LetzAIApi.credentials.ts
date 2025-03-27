import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class LetzAIApi implements ICredentialType {
	name = 'letzAIApi';
	displayName = 'LetzAI API';
	documentationUrl = 'https://letz.ai/docs/api';
	properties: INodeProperties[] = [
		{
			displayName: 'ApiKey',
			name: 'apikey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			description: 'Get your api key from LetzAI: https://letz.ai/subscription',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				authorization: '={{"Bearer "+ $credentials.apikey}}',
			},
		},
	};
}
