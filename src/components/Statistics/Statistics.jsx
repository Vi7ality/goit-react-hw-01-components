import PropTypes from "prop-types";
import { Section, Title, StatList, StatItem } from "./Statistics.styled";

export const Statistics = ( {stats, title}) => (
    <Section>
        {title && (<Title>{ title }</Title>)
        }



  <StatList>
            {stats.map(stat => (
        <StatItem key={stat.id}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </StatItem>
))}

  </StatList>
</Section>
)

Statistics.propTypes = {
    stat: PropTypes.exact(
{        id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequiered,
        percentage: PropTypes.number.isRequired,}

    ),
    title: PropTypes.string,
}