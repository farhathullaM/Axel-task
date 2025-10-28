export type PrimaryStatus = "Active" | "Inactive";
export type SecondaryStatus = "Away" | "On Leave" | "Busy" | "Terminated";

export type TableDataType = {
  username: string;
  name: string;
  selected: boolean;
  status: PrimaryStatus;
  subStatus: SecondaryStatus;
  role: string;
  email: string;
  teams: string[];
  image: string;
};

export type TableDataList = TableDataType[];
