import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'

const Dashboard: React.FC = () => {

    return (
        <DashboardLayout>
            <div
                style={{
                    fontWeight: '500',
                    fontSize: '1.5rem',
                    lineHeight: '28px',
                    color: '#213F7D'
                }}
            >
                Dashboard!
            </div>
        </DashboardLayout>
    )
}

export default Dashboard