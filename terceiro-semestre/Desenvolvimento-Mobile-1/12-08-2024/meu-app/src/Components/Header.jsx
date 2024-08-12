const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Meu App em React Vite</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '2em',
    margin: '0',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    margin: '20px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
  }
};

export default Header;
