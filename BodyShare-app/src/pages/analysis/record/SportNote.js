import SportsListItem from "pages/analysis/record/SportsListItem";

const Sport = function ({ sportsList, onDelete }) {
  const list = sportsList.map(record => {
    return (
      <SportsListItem key={record.planNo} record={record} onDelete={onDelete} />
    );
  });

  return (
    list
  );
};

export default Sport;
