export const ErrorText = ({errorText}) => {
    return(
      <> {errorText ? <div className="text-danger">{errorText}</div> : null}  </> 
    )
}