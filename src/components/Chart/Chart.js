import './Chart.css'

import ChartBar from './ChartBar';

const Chart = props => {

    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const max = Math.max(...dataPointsValue);

    return <div>
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={max}
                    label={dataPoint.label}
                />
            )}
        </div>
    </div>
}

export default Chart