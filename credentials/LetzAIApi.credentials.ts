import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class LetzAIApi implements ICredentialType {
	name = 'LetzAIApi';
	displayName = 'LetzAI API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://letz.ai/docs/api';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			description: 'Get your api key from LetzAI: https://letz.ai/subscription',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	} as IAuthenticateGeneric;
}
