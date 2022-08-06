import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearAlert, selectUserState } from "../../store/userSlice";

const AlertMessage = () => {
  const { alertText, alertType } = useSelector(selectUserState);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  }, [dispatch]);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};


export default AlertMessage;
