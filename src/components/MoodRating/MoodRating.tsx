import Image from 'next/image';
import React from 'react';

enum Mood {
	AWESOME = 'awesome',
	GOOD = 'good',
	NEUTRAL = 'neutral',
	BAD = 'bad',
	AWFUL = 'awful',
}
interface MoodRatingProps {
	src: string;
	alt: string;
	description: string;
	hideText?: boolean;
	mood?: Mood;
}

function MoodRating({ src, alt, description, hideText }: MoodRatingProps) {
	return (
		<div className="flex flex-col items-center">
			<Image
				src={src}
				alt={alt}
			/>
			{!hideText && <div className="text-sm">{description}</div>}
		</div>
	);
}

export default MoodRating;
