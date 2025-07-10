import { dkeeper_backend } from "../../../declarations/dkeeper_backend";
import Button from '@mui/material/Button';

function ClearAll() {
  async function handleClick() {
    await dkeeper_backend.clearNotes()
  }

  return(
    <Button variant='contained' color='warning' onClick={handleClick}>
      Clear All
    </Button>
  )
}

export default ClearAll;