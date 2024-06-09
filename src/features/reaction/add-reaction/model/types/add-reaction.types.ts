export type SelectReaction = 'like' | 'blame';

export interface ReactionData {
	icon: string;
	name: SelectReaction;
}
