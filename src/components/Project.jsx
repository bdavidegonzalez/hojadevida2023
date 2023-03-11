import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Project = ({ project }) => {

  const theme = useTheme();

  return (
    <>
     {
      project.map(( data ) => ( 
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
        <Card variant="outlined" sx={{ display: 'flex' }}>
        <CardActionArea>
          <CardContent key="data" { ...data }>
            <Typography gutterBottom variant="h5" component="div">
              { data.title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { data.short_description }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { data.description }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Paper />
      </Box>
      ))
     } 
    </>
  )
  
}

