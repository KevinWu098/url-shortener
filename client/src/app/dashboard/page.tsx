import React from "react";
import { checkRole } from "@/utils/roles";

const Page = () => {
    if (!checkRole("admin")) {
        return (
            <div>
                <p>
                    You are not (yet) authorized to view this page. Please
                    contact an <b>admin</b> to grant you permissions.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div>Dashboard</div>
        </div>
    );
};

export default Page;
