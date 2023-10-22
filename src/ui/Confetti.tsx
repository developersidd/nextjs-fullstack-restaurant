"use client";
import { useAppSelector } from '@/redux/app/hooks';
import { selectUser } from '@/redux/features/user/userSelector';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const FireConfetti = () => {
    const { width, height } = useWindowSize();
    const { user: { email }, showConfetti } = useAppSelector(selectUser);
    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={showConfetti ? 2000 : 0}
            recycle={false}
            onConfettiComplete={(confetti) => confetti?.reset()}
        />
    )
}

export default FireConfetti;