import PropTypes from "prop-types";

export const Statistics = ( { stats }) => (
    <section className="statistics">
        <h2 className="title">{ stats.title }</h2>


  <ul className="stat-list">
            {stats.map(stat => (
        <li className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
))}

  </ul>
</section>
)

Statistics.propTypes = {
    stat: PropTypes.exact(
{        id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequiered,
        percentage: PropTypes.number.isRequired,}

    )
}