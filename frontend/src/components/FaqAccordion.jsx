import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion({ items, testidPrefix = "faq" }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {items.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[var(--line)]">
                    <AccordionTrigger
                        data-testid={`${testidPrefix}-question-${i + 1}`}
                        className="py-4 text-left text-[15px] font-semibold text-ink hover:no-underline [&>svg]:text-[var(--amber)]"
                    >
                        {f.q}
                    </AccordionTrigger>
                    <AccordionContent
                        data-testid={`${testidPrefix}-answer-${i + 1}`}
                        className="pb-4 text-sm leading-relaxed text-[var(--muted)]"
                    >
                        {f.a}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
