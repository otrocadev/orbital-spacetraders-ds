export const ST_TONES = ['brand', 'accent', 'neutral'] as const;
export type StTone = (typeof ST_TONES)[number];

export const ST_SIZES = ['sm', 'md', 'lg'] as const;
export type StSize = (typeof ST_SIZES)[number];

export const ST_BUTTON_VARIANTS = ['primary', 'secondary', 'ghost'] as const;
export type StButtonVariant = (typeof ST_BUTTON_VARIANTS)[number];

export const ST_INPUT_TYPES = ['text', 'email', 'password', 'number', 'search'] as const;
export type StInputType = (typeof ST_INPUT_TYPES)[number];
