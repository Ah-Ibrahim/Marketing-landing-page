import { nanoid } from 'nanoid';
import z from 'zod';
import { PricingRecordSchema } from './PricingSchemas';

const IconSrcArraySchema = z.array(
    z
        .object({
            src: z.string(),
        })
        .transform((srcObj) => ({ ...srcObj, id: nanoid() })),
);

const FeatureSchema = z
    .object({
        iconSvgSrc: z.string(),
        iconAlt: z.string(),
        title: z.string().optional(),
        description: z.string(),
    })
    .transform((feature) => ({ ...feature, id: nanoid() }));

const SectionSchema = z.object({
    opener: z.string().optional(),
    mainTitle: z.string(),
    mainDescription: z.string(),
});

const ShowcaseSchema = SectionSchema.extend({
    imgSrc: z.string().optional(),
    imgAlt: z.string().optional(),
    features: z.array(FeatureSchema),
});

const SubscriptionSchema = ShowcaseSchema.omit({ mainDescription: true });

const PlanSchema = z
    .object({
        title: z.string(),
        description: z.string(),
        features: z.array(FeatureSchema),
        pricing: PricingRecordSchema,
        isFeatured: z.boolean(),
    })
    .transform((plan) => ({ ...plan, id: nanoid() }));

const PricingSectionSchema = SectionSchema.extend({
    plans: z.array(PlanSchema),
});

// NOTE: is there a better way to handle svg?

const FAQSchema = z
    .object({
        question: z.string(),
        answer: z.string(),
        iconSvgSrc: z.string(),
        iconAlt: z.string(),
    })
    .transform((FAQ) => ({ ...FAQ, id: nanoid() }));

const FAQSectionSchema = SectionSchema.extend({
    FAQs: z.array(FAQSchema),
});

export const LandingPageJSONSchema = z.object({
    teamsLogoSrc: IconSrcArraySchema,
    mainFeaturesShowcase: ShowcaseSchema,
    designShowcase: ShowcaseSchema,
    supportShowcase: ShowcaseSchema,
    pricingSection: PricingSectionSchema,
    FAQSection: FAQSectionSchema,
    NewsletterSection: SubscriptionSchema,
});

// Types

export type IconSrcArray = z.infer<typeof IconSrcArraySchema>;
export type ShowcaseType = z.infer<typeof ShowcaseSchema>;
export type PlanType = z.infer<typeof PlanSchema>;
export type PricingSectionType = z.infer<typeof PricingSectionSchema>;
export type FAQType = z.infer<typeof FAQSchema>;
export type FAQSectionType = z.infer<typeof FAQSectionSchema>;
export type SubscriptionType = z.infer<typeof SubscriptionSchema>;
export type LandingPageJSONType = z.infer<typeof LandingPageJSONSchema>;
