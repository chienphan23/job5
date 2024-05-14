import {
    Accordion,
    AccordionDetails,
    AccordionGroup,
    AccordionSummary,
    FormControl,
    FormLabel,
    ListItemContent,
    Stack,
    Typography,
    accordionDetailsClasses,
    accordionSummaryClasses,
} from "@mui/joy";
import { Link } from "react-router-dom";

export const MainSideBar = () => {
    return (
        <AccordionGroup
            variant="plain"
            transition="0.2s"
            sx={{
                // maxWidth: 300,
                borderRadius: "md",
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                    {
                        paddingBlock: "1rem",
                    },
                [`& .${accordionSummaryClasses.button}`]: {
                    paddingBlock: "1rem",
                },
            }}
        >
            <Accordion>
                <AccordionSummary>
                    <ListItemContent>
                        <Typography level="title-md">
                            Quản lý đăng tuyển
                        </Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/create-job"}>
                                    Tạo tin tuyển dụng
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/manage-job"}>Quản lý tin đăng</Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
};
