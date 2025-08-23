import type { ReactNode } from 'react';

type PageDetailsProps = {
    children: ReactNode;
};

function PageDetails({ children }: PageDetailsProps) {
    return (
        <main className="bg-bg-primary mt-4 grid justify-items-center rounded-md py-12 md:py-16">
            {children}
        </main>
    );
}

export default PageDetails;
