import z from 'zod';
import { PricingRecordSchema } from './PricingSchemas';

const IconSrcArraySchema = z.array(
    z.object({
        src: z.string(),
    }),
);

const FeatureSchema = z.object({
    iconSvgSrc: z.string(),
    iconAlt: z.string(),
    title: z.string().optional(),
    description: z.string(),
});

const SectionSchema = z.object({
    opener: z.string(),
    mainTitle: z.string(),
    mainDescription: z.string(),
});

const ShowcaseSchema = SectionSchema.extend({
    imgSrc: z.string().optional(),
    imgAlt: z.string().optional(),
    features: z.array(FeatureSchema),
});

const PlanSchema = z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(FeatureSchema),
    pricing: PricingRecordSchema,
    isFeatured: z.boolean(),
});

const PricingSectionSchema = SectionSchema.extend({
    plans: z.array(PlanSchema),
});

export const LandingPageJSONSchema = z.object({
    teamsLogoSrc: IconSrcArraySchema,
    mainFeaturesShowcase: ShowcaseSchema,
    designShowcase: ShowcaseSchema,
    supportShowcase: ShowcaseSchema,
    pricingSection: PricingSectionSchema,
});

// Types

export type IconSrcArray = z.infer<typeof IconSrcArraySchema>;
export type ShowcaseType = z.infer<typeof ShowcaseSchema>;
export type PlanType = z.infer<typeof PlanSchema>;
export type PricingSectionType = z.infer<typeof PricingSectionSchema>;
export type LandingPageJSONType = z.infer<typeof LandingPageJSONSchema>;
