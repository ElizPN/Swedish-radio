import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link, styled } from "@mui/material";
import Box from "@mui/system/Box";
import { nanoid } from "nanoid";
import { ProgramData } from "./CategoriesList";

interface RadioItemProps {
  radioList: ProgramData[];
}


export function RadioItem({ radioList }: RadioItemProps) {
  return (
    <Box>
      <Grid container spacing={2} padding={5}>
        {radioList.length > 0 &&
          radioList.map((item) => (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <Link href={item.programurl} target='_blank'>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='300'
                      image={item.programimage}
                      alt='green iguana'
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
