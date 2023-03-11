import { Box } from "@mui/material";
import { ProgramData } from "./RadioContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link } from "@mui/material";
import { genereteId } from "../services/generateId";

interface ProgramsListProps {
  radioList: ProgramData[];
}

export function ProgramsList({ radioList }: ProgramsListProps) {
  return (
    <Box>
      <Grid container spacing={2} padding={5}>
        {radioList.length > 0 &&
          radioList.map((item, index) => (
            <Grid
              key={genereteId()}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              data-testid={`program-item-${index}`}
            >
              <Card sx={{ maxWidth: 345 }}>
                <Link href={item.programurl} target='_blank'>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='300'
                      image={item.programimage}
                      alt='programm-image'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {item.name}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
