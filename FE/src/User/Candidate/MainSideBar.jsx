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
                maxWidth: 300,
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
                            Quản lý tài khoản
                        </Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/edit-candidate-profile"}>
                                    Tài khoản của bạn
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>
                    <ListItemContent>
                        <Typography level="title-md">Quản lý hồ sơ</Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/manage-cv"}>Hồ sơ của bạn</Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>
                    <ListItemContent>
                        <Typography level="title-md">
                            Quản lý việc làm
                        </Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/job-applied"}>
                                    Việc làm đã ứng tuyển
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/job-saved"}>Việc làm đã lưu</Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={`/candidate-profile`}>
                                    Thông báo việc làm
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <ListItemContent>
                        <Typography level="title-md">Nhà tuyển dụng</Typography>
                    </ListItemContent>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                            <FormLabel>
                                <Link to={"/company-follow"}>
                                    Nhà tuyển dụng bạn theo dõi
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
};
