"use client";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const FireConfetti = () => {
    const { width, height } = useWindowSize();
    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={2000}
            recycle={false}
            onConfettiComplete={(confetti) => confetti?.reset()}
        />
    )
}

export default FireConfetti;