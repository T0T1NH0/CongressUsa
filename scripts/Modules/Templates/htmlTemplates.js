export const congress113 = (data) => {
  return `<tr>
  <td> 
    <a href="${data.url}">
      ${data.last_name}  ${data.first_name}
    </a>
  </td>
  <td> 
  ${data.party}
  </td>
  <td>
  ${data.state}
  </td>
  <td>
  ${data.seniority}
  </td>
  <td>
  ${data.votes_with_party_pct}%
  </td>
  </tr>`;
};

export const attendance = (data) => {
  return `<tr>
      <td> 
        <a href="${data.url}">
          ${data.last_name}  ${data.first_name}
        </a>
      </td>
      <td> 
      ${data.party}
      </td>
      <td>
      ${data.state}
      </td>
      </tr>`;
};

export const attendanceGlance = (data) => {
  return `<tr>
    <td> 
        ${
          data.party === 'R' ? 'Republican' : data.p === 'D' ? 'Democrats' : 'Independent'
        }
    </td>
    <td> 
    ${data.party}
    </td>
    <td>
    ${data.state}
    </td>
    </tr>`;
};

export const attendanceLeast = (data) => {
  return `<tr>
    <td> 
    <a href="${data.url}">
    ${data.last_name}  ${data.first_name}
    </a>
    </td>
    <td> 
    ${data.party}
    </td>
    <td>
    ${data.state}
    </td>
    </tr>`;
};
