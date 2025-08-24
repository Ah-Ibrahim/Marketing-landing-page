import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { FAQType } from '../types/PageSchemas';

type FAQCardProps = FAQType;

function FAQCard({ question, answer, iconSvgSrc, iconAlt }: FAQCardProps) {
    const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);

    const handleBtnClick = () => setIsAnswerShown((prev) => !prev);

    return (
        <div className="border-line-primary py-7 not-last:border-b-2">
            <div className="mb-2.25 flex flex-row items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{question}</h3>
                <button
                    className="icon border-icon-primary w-5 shrink-0 cursor-pointer rounded-full border-2"
                    onClick={handleBtnClick}
                >
                    <img src={iconSvgSrc} alt={iconAlt} />
                </button>
            </div>
            <AnimatePresence>
                {isAnswerShown && (
                    <motion.div
                        className="overflow-y-hidden"
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: 'max-content',
                            transition: {
                                duration: 0.75,
                                ease: 'backInOut',
                            },
                        }}
                        exit={{
                            height: 0,
                            transition: {
                                duration: 0.5,
                                ease: 'backIn',
                            },
                        }}
                    >
                        <p className="text-primary text-md h-max">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FAQCard;
