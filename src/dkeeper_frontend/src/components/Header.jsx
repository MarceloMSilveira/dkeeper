import HighlightIcon from '@mui/icons-material/Highlight';
function Header() {
  const appName = " MS1 Keeper APP"
  return (
    <header>
      <h1><HighlightIcon />{appName}</h1>
    </header>
  )
}

export default Header;