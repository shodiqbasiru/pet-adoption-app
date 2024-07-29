import {classNames} from "primereact/utils";

interface Props {
    disabled?: boolean;
    readOnly?: boolean;
    size?: 'large' | 'small' | null;
    layout?: 'grid' | 'list';
}

interface Context {
    focused?: boolean;
}

export const Tailwind = {
    rating: {
        root: ({props}: { props: Props }) => ({
            className: classNames('relative flex items-center', 'gap-2', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        item: ({props, context}: { props: Props, context: Context }) => ({
            className: classNames(
                'inline-flex items-center',
                {
                    'cursor-pointer': !props.readOnly,
                    'cursor-default': props.readOnly
                },
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            )
        }),
        officon: {
            className: classNames('text-yellow-500 hover:text-yellow-400', 'w-4 h-4', 'transition duration-200 ease-in')
        },
        onicon: {
            className: classNames('text-yellow-500', 'w-4 h-4', 'transition duration-200 ease-in')
        }
    },

    breadcrumb: {
        root: {
            className: classNames('overflow-x-auto', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md p-4 my-4')
        },
        menu: 'm-0 p-0 list-none flex items-center flex-nowrap',
        action: {
            className: classNames(
                'text-decoration-none flex items-center',
                'transition-shadow duration-200 rounded-md text-gray-600 dark:text-white/70',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        icon: 'text-primary-100 dark:text-white/70',
        separator: {
            className: classNames('mx-2 text-gray-600 dark:text-white/70', 'flex items-center')
        }
    },
}