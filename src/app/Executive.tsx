import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhoneIcon from '@mui/icons-material/Phone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';



interface CopyableTextProps {
    text: string;
}

function CopyableText({ text }: CopyableTextProps) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography variant="caption">{text}</Typography>
            <IconButton size="small" onClick={copyToClipboard} aria-label="Kopieren">
                <ContentCopyIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
}

function Executive() {
    return (
        <Box sx={{ padding: "15em", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "5em" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10em" }}>
                <Box>
                    <img src="https://via.placeholder.com/150" alt="Vorsitzender_1" style={{ width: "150px", height: "150px" }} />
                    <Typography variant="h6">1. Vorsitzender</Typography>
                    <Typography>Jörg Muszynski</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CopyableText text="04706 9309722" />
                        <CopyableText text="0170 3214438" />
                    </Box>
                </Box>
                <Box>
                    <img src="https://via.placeholder.com/150" alt="Vorsitzender_2" style={{ width: "150px", height: "150px" }} />
                    <Typography variant="h6">2. Vorsitzender</Typography>
                    <Typography>Christian Creutz</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* </Box><CopyableText text="04706-9309722" />
                        <CopyableText text="0170-3214438" /> */}
                    </Box>
                </Box>
                <Box>
                    <img src="https://via.placeholder.com/150" alt="Vorsitzender_3" style={{ width: "150px", height: "150px" }} />
                    <Typography variant="h6">3. Vorsitzender</Typography>
                    <Typography>Maèl Zinser</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* </Box><CopyableText text="04706-9309722" />
                        <CopyableText text="0170-3214438" /> */}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10em" }}>
                <Box>
                    <img src="https://via.placeholder.com/150" alt="Vorsitzender_1" style={{ width: "150px", height: "150px" }} />
                    <Typography variant="h6">Kassenwartin</Typography>
                    <Typography>Carin Horn</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* <CopyableText text="04706-9309722" /> */}
                        <CopyableText text="0174 1750929" />
                    </Box>
                </Box>
                <Box>
                    <img src="https://via.placeholder.com/150" alt="Vorsitzender_2" style={{ width: "150px", height: "150px" }} />
                    <Typography variant="h6">Schriftwartin</Typography>
                    <Typography>Valery Creutz</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* </Box><CopyableText text="04706-9309722" /> */}
                        <CopyableText text="0171 7227632" /> 
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    );
}

export default Executive;
