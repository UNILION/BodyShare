import SportsListItem from "pages/analysis/record/SportsListItem";

const Sport = function ({sportsList}) {
  const list = sportsList.map(record => {
    return (
      <SportsListItem key={record.planNo} record={record} />
    );
  });

  return (
    list
  );
};

export default Sport;
