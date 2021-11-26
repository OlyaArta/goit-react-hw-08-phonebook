// import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/phonebook-selectors";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../redux/phonebook-actions";
import { changeFilter } from "../../redux/phonebook-actions";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
}
// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Filter;
