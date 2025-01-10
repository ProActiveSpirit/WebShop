import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMenu, setSelectedTag } from '../../../../redux/slices/navigation';

export default function NavigationMenu() {
  const dispatch = useDispatch();
  const selectedMenu = useSelector((state) => state.navigation.selectedMenu);

  const handleMenuClick = (menuName) => {
    dispatch(setSelectedMenu(menuName));
    dispatch(setSelectedTag(null));
  };

  const MenuBox = ({ children, name, hasDropdown = false, isOrange = false }) => (
    <Box
      onClick={() => handleMenuClick(name)}
      sx={{
        color: isOrange ? '#FF7801' : selectedMenu === name ? '#FF7801' : '#FFFFFF',
        fontSize: '15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        '&:hover': { color: '#FF7801' },
      }}
    >
      {isOrange && <Box component="img" src="/images/Navbar/DG-Orange.svg" />}
      {children}
      {hasDropdown && <Box component="img" src="/images/Navbar/Dropdown.svg" />}
    </Box>
  );

  return (
    <Box sx={{ height: 40, width: '100%', bgcolor: '#666666' }}>
      <Box
        sx={{
          height: 28,
          width: 1322,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 'auto',
          paddingTop: '15px',
        }}
      >
        <Box sx={{ display: 'flex', gap: 3 }}>
          <MenuBox name="PC">PC</MenuBox>
          <MenuBox name="XBOX" hasDropdown>
            XBOX
          </MenuBox>
          <MenuBox name="Nintendo" hasDropdown>
            Nintendo
          </MenuBox>
          <MenuBox name="PlayStation" hasDropdown>
            PlayStation
          </MenuBox>
          <MenuBox name="Pre-Orders">Pre-Orders</MenuBox>
          <MenuBox name="Nieuwe Games">Nieuwe Games</MenuBox>
          <MenuBox name="Cadeaubonnen" hasDropdown>
            Cadeaubonnen
          </MenuBox>
          <MenuBox name="Dream deal" isOrange>
            Dream deal
          </MenuBox>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <MenuBox name="Support">Support</MenuBox>
          <MenuBox name="Newsroom">Newsroom</MenuBox>
        </Box>
      </Box>
    </Box>
  );
}
