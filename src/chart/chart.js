import React from 'react'
import Chart from 'react-apexcharts'

const options = {
    labels: ["Income", "Expense"],
    colors: ['#321ebf', '#FD5E53'],
    chart: {
        width: "50px"
    },
    states: {
        hover: {
            filter: {
                type: "none"
            }
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    total: {
                        show: true,
                        showAlways: true, // Memastikan label selalu terlihat
                        label: 'Total',
                        formatter: () => '0', // Tampi

                    }
                }
            }

        }
    },
    fill: {
        colors: ['#321ebf', '#FD5E53']
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        }
    }
}


const TransactionChartSummary = ({ expense = 100, income = 100 }) => {
    return <Chart
        options={options}
        series={[income, expense]}
        type='pie'
        width={'100%'}
        height={'100%'}
    />
}

export default TransactionChartSummary