import { IntlText } from ".";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
    title: "Atoms/IntlText",
    component: IntlText,
    tags: ["autodocs"],
    argTypes: {
        formatType: {
            control: {
                type: "select",
                options: ["number", "date", "time", "relative"],
            },
        },
        locales: { control: "text" },
        formatOptions: { control: "object" },
        value: { control: "text" },
        unit: { control: "text" },
    },
};
export default meta;
/**
 * An example of using IntlText for displaying currency values.
 */
export const CurrencyDisplay = {
    args: {
        formatType: "number",
        value: 5000,
        formatOptions: {
            style: "currency",
            currency: "USD",
            notation: "compact",
            compactDisplay: "long",
        },
    },
};
CurrencyDisplay.storyName = "Currency Display";
/**
 * An example of using IntlText for displaying large numbers, like views on a video.
 */
export const ViewsCount = {
    args: {
        formatType: "number",
        value: 1050000,
        formatOptions: {
            notation: "compact",
            compactDisplay: "short",
        },
    },
};
ViewsCount.storyName = "Views Count";
/**
 * An example of using IntlText for displaying dates in full format.
 */
export const FullDateDisplay = {
    args: {
        formatType: "date",
        value: "04/20/1988",
        formatOptions: {
            dateStyle: "full",
            timeStyle: "medium",
            timeZone: "UTC",
        },
    },
};
FullDateDisplay.storyName = "Full Date Display";
/**
 * An example of using IntlText for displaying dates in short format.
 */
export const ShortDateDisplay = {
    args: {
        formatType: "date",
        value: "Mon Jun 12 2023 23:19:46 GMT+0530 (India Standard Time)",
        formatOptions: {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
        },
    },
};
ShortDateDisplay.storyName = "Short Date Display";
/**
 * An example of using IntlText for displaying relative time, like post upload time.
 */
export const RelativeTimeDisplay = {
    args: {
        formatType: "relativeTime",
        value: -3,
        unit: "day",
        locales: "en-US",
    },
};
RelativeTimeDisplay.storyName = "Relative Time Display";
