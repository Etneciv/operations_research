import '../STYLE/Header.scss'

function MenuItem({ title, icon }) {

    return (
        <div className='OptionMenu'>
            <div className='OptionMenuTitle'>
                <img src={icon} />
                {title}
            </div>
        </div>
    )
}

export default MenuItem;