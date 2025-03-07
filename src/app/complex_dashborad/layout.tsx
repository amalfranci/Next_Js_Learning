

export default function DashboardLayout({
    children,
    users,
    notification,
    revenue
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notification: React.ReactNode;
    revenue: React.ReactNode
}) {
    return (
        <>
            <div>{children}</div>
            <div>{users}</div>
            <div>{notification}</div>
            <div>{revenue}</div>
        </>
    )
}