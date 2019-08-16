import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import TokenImage from "./TokenImage";

const TokenListItem = ({ position, token }) => {
  const fillCount = _.get(token, "stats.24h.fillCount", 0);

  return (
    <tr className={fillCount === 0 ? "faded" : undefined}>
      <td className="align-middle">{position}</td>
      <td className="align-middle">
        <TokenImage imageUrl={token.imageUrl} />
      </td>
      <td width="99%">
        {token.name || "Unknown Token"}
        <br />
        {token.symbol || token.address}
      </td>
      <td className="align-middle" css="text-align: right;" />
      <td className="align-middle" css="text-align: right;">
        {fillCount === 0 ? "-" : fillCount}
      </td>
      <td className="align-middle" css="text-align: right;" />
    </tr>
  );
};

TokenListItem.propTypes = {
  position: PropTypes.number.isRequired,
  token: PropTypes.object.isRequired
};

export default TokenListItem;
