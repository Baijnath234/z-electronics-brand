import React from "react";
import { Box, Typography, Paper, Button, Rating } from "@mui/material";

export default function ProductCard({
  title,
  image,
  price,
  strikePrice,
  discount,
  rating,
  ratingCount,
  colors = [],
  moreColors = 0,
}: any) {
  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 3,
        width: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 26px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          width: 280,
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          p: 1,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            objectPosition: "center",
            display: "block",
            position: "sticky",
          }}
        />
      </Box>

      {/* Rating Badge */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          mb: 1,
          px: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f3f0e9ff",
            px: 1,
            borderRadius: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography variant="body2" fontWeight="700">
            {rating.toFixed(1)}
          </Typography>
          <Rating value={rating} size="small" readOnly />
        </Box>
        {ratingCount && (
          <Typography variant="caption">({ratingCount})</Typography>
        )}
      </Box>

      {/* Product Title */}
      <Typography variant="subtitle1" fontWeight="600" noWrap px={1}>
        {title}
      </Typography>

      {/* Price + Discount */}
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, px: 1 }}>
        <Typography variant="h6" fontWeight="700">
          {price}
        </Typography>

        {strikePrice && (
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              opacity: 0.7,
            }}
          >
            {strikePrice}
          </Typography>
        )}

        {discount && (
          <Typography variant="body2" fontWeight="700" color="green">
            {discount} off
          </Typography>
        )}
      </Box>

      {/* Color Variants */}
      {colors.length > 0 && (
        <Box
          sx={{ display: "flex", mt: 1, gap: 0.8, alignItems: "center", px: 1 }}
        >
          {colors.map((c: any, i: React.Key | null | undefined) => (
            <Box
              key={i}
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: c,
                border: "1px solid #00000022",
                cursor: "pointer",
                mb: 1,
              }}
            />
          ))}

          {moreColors > 0 && (
            <Typography variant="caption" fontWeight="600">
              +{moreColors}
            </Typography>
          )}
        </Box>
      )}
    </Paper>
  );
}
