import { useState } from 'react';
import type { ContactSectionType } from '../types/PageSchemas';

type ContactSectionProps = ContactSectionType;
const MAX_CHAR_NUM = 500;

function ContactSection({
    mainTitle,
    mainDescription,
    infos,
}: ContactSectionProps) {
    const [message, setMessage] = useState<string>('');

    const items = infos.map((info) => (
        <div className="flex flex-row items-center gap-x-3" key={info.id}>
            <img
                className="feature-icon "
                src={info.iconSvgSrc}
                alt={info.iconAlt}
            />

            <p className="text-primary text-balance">{info.infoDetails}</p>
        </div>
    ));

    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        if (e.target.value.length > MAX_CHAR_NUM) return;

        setMessage(e.target.value);
    };

    return (
        <section className="section">
            <h2 className="text-4xl font-semibold mb-6">{mainTitle}</h2>
            <p className="text-primary text-lg mb-9">{mainDescription}</p>
            <div className="space-y-5 mb-12">{items}</div>
            <form
                action=""
                method="POST"
                onSubmit={(e) => e.preventDefault()}
                className="grid border-2 border-form-border rounded-lg p-4 text-sm shadow-lg"
            >
                <label htmlFor="userName" className="mb-2 text-form-text-title">
                    Name
                </label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Your name"
                    className="bg-form-background border rounded-sm p-2 border-form-border mb-6 outline-line-brand-solid placeholder:text-form-text-placeholder"
                    required
                />
                <label
                    htmlFor="userEmail"
                    className="mb-2 text-form-text-title"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="example@example.com"
                    className="bg-form-background border rounded-sm p-2 border-form-border mb-6 outline-line-brand-solid"
                    required
                />
                <label
                    htmlFor="userMessage"
                    className="mb-2 text-form-text-title"
                >
                    Message
                </label>
                <textarea
                    id="userMessage"
                    name="userMessage"
                    placeholder="Write your message..."
                    value={message}
                    onChange={handleTextareaChange}
                    className="bg-form-background border rounded-sm p-2 border-form-border mb-2 resize-none outline-line-brand-solid h-26"
                    required
                />
                <div className="mb-10 justify-self-end text-form-text-hint">
                    {message.length}/{MAX_CHAR_NUM}
                </div>
                <button className="btn btn--primary py-3" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}
export default ContactSection;
