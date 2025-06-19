export const getPageSizeOptions = () => {
    const pageSizeOptions: {label: string, value: number}[] = [
        {
            label: '10',
            value: 10
        },
        {
            label: '20',
            value: 20
        },
        {
            label: '30',
            value: 30
        },
        {
            label: '40',
            value: 40
        },
        {
            label: '50',
            value: 50
        },
        {
            label: '60',
            value: 60
        },
        {
            label: '70',
            value: 70
        },
        {
            label: '80',
            value: 80
        },
        {
            label: '90',
            value: 90
        },
        {
            label: '100',
            value: 100
        },
    ];

    return pageSizeOptions;
}

export const getOrgOptions = () => {
    const orgOptions: { label: string, value: string }[] = [
        {
            label: 'Labore-Dolor-Et',
            value: 'labore-dolor-et'
        },
    ]

    return orgOptions;
}

export const getStatusOptions = () => {
    const statusOptions: { label: string, value: string }[] = [
        {
            label: 'Active',
            value: 'active'
        },
        {
            label: 'Inactive',
            value: 'inactive'
        },
        {
            label: 'Blacklisted',
            value: 'blacklisted'
        },
    ]

    return statusOptions;
}