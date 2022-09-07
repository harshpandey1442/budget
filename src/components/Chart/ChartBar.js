import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100).toString() + '%';
    }

    return <div className='bar'>
        <div className='bar_inner'>
            <div className='bar_fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='bar_label'>{props.label}</div>
    </div>
};

export default ChartBar;