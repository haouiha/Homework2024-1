import styled from "styled-components";
import { colors } from "@/styles/colors";

type CardBoxProps = {
  variant: "odd" | "even";
};
export const CardBox = styled.div<CardBoxProps>((props) => ({
  width: "100%",
  background: props.variant === "odd" ? colors.white : colors.blue,
  boxShadow: `0px 3px 2px 0px ${colors.gray}`,
  marginBottom: "18px",
  overflow: "hidden",
}));

export const TopSection = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 6,
  alignItems: "center",
  padding: "8px 16px",
}));

export const Avatar = styled.img(() => ({
  width: 26,
  height: 26,
  borderRadius: "50%",
}));

export const AuthorName = styled.span(() => ({
  color: colors.orange,
  fontWeight: 700,
}));

export const PostDate = styled.span(() => ({
  color: colors.gray,
  fontFamily: "Helvetica Neue, sans-serif",
  fontSize: "small",
}));

export const Divider = styled.div(() => ({
  borderBottom: `1px solid ${colors.gray}`,
  opacity: 0.5,
}));

export const BottomSection = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  padding: "16px",
}));

export const PostImage = styled.img(() => ({
  width: 240,
  height: "fit-content",
}));

export const PostContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const PostTitle = styled.span(() => ({
  color: colors.black,
  fontFamily: "Helvetica Neue, sans-serif",
  fontWeight: 700,
  fontSize: "large",
}));

export const PostBody = styled.span(() => ({
  color: colors.black,
  fontFamily: "Helvetica Neue, sans-serif",
  fontSize: "small",
}));
