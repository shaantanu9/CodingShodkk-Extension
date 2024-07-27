import React, { Profiler, useEffect, useRef, useState } from "react";
import TextBox from "./InputBookmark";
import GetBookmark from "./CurrentPage";
import GetURL from "./SearchKeyword";
import Login from "./Login";
import Logout from "./Logout";
// import ProfileTab from "./Profile";
import { _userAccountService, _taskService } from "../../utils/services";

const ProfileTab = ({ userData, setToken }) => {
  const [analytics, setAnalytics] = useState(null);
  const [user, setUser] = useState(null);
  const primaryColor = "#4456FF";

  const refreshAnalytics = async () => {
    const analyticsData = await _userAccountService.getAnalytics();
    setAnalytics(analyticsData?.data?.[0]);
  };

  const getSingleUserProfile = async () => {
    const user = await _userAccountService.getSingleUserProfile(userData?._id);
    console.log(user);
    setUser(user?.data);
  };

  useEffect(() => {
    getSingleUserProfile();
    refreshAnalytics();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <img
          src={userData?.profileImage}
          alt="User profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#4456FF",
            margin: "8px 0 4px 0",
          }}
        >
          {userData?.name}
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            color: "gray",
            margin: 0,
          }}
        >
          {userData?.currentDesignation}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "8px",
          }}
        >
          <p
            //  style={{
            //   margin: 0, fontSize: "24px", fontWeight: "normal" }}
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              padding: "12px 24px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              transition: "background-color 200ms",
              border: "1px solid #d1d5db",
            }}
          >
            Token {user?.tokens}
          </p>
          <p
            //  style={{ margin: 0, fontSize: "24px", fontWeight: "normal" }}
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              padding: "12px 24px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              transition: "background-color 200ms",
              border: "1px solid #d1d5db",
            }}
          >
            Token {user?.tokenUsage}
          </p>
        </div>
      </div>

      <div
        style={{
          marginBottom: "12px",
          marginTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {[
          { label: "Tasks", value: analytics?.taskCreated ?? 0 },
          { label: "Completed", value: analytics?.taskCompleted ?? 0 },
          { label: "Journal Streak", value: analytics?.journalCreated ?? 0 },
          { label: "Mistakes", value: analytics?.mistakesMade ?? 0 },
          { label: "Quiz Taken", value: analytics?.quizTaken ?? 0 },
          { label: "Following", value: 0 },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4
              style={{ fontSize: "24px", fontWeight: "bold", color: "#4456FF" }}
            >
              {item.value}
            </h4>
            <p
              style={{ fontSize: "14px", fontWeight: "normal", color: "gray" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          padding: "5px",
          zIndex: "1000",
        }}
      >
        <Logout deleteToken={setToken} />
      </div>
    </>
  );
};
const JournalTab = ({ userData }) => {
  const primaryColor = "#4456FF";

  const [inputData, setInputData] = useState("");
  const [selected, setSelected] = useState("");
  const [hoveredButton, setHoveredButton] = useState(null);
  const inputRef = useRef(null);
  const list = [
    { label: "Bookmark", value: "bookmark" },
    { label: "Personal Dairy", value: "personalDiary" },
  ];

  const submitHandler = () => {
    // Handle submit
  };

  const searchHandler = () => {
    // Handle search
  };

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "10px",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "4px",
          width: "110%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            gap: "12px",
            width: "90%",
            // marginTop: "12px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#4456FF",
              margin: 0,
            }}
          >
            Hi, {userData?.name.split(" ")[0]} 👋
          </p>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "gray",
              // textAlign: "center",
              wordSpacing: "1px",
            }}
          >
            Never forget what you browse,read,learn and share it with your
            friends
          </span>
        </div>

        <input
          style={{
            height: "50px",
            width: "75%",
            margin: "0 auto",
            marginLeft: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
            padding: "0 16px",
            fontSize: "16px",
            fontWeight: "500",
            color: "black",
            border: "1px solid #d1d5db",
          }}
          ref={inputRef}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginTop: "8px",
            width: "90%",
          }}
        >
          <button
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              padding: "10px 20px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              transition: "background-color 200ms",
              border: "1px solid #d1d5db",
            }}
            onClick={submitHandler}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.8)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.7)")
            }
            onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            Add
          </button>
          <button
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              padding: "10px 20px",

              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              transition: "background-color 200ms",
              border: "1px solid #d1d5db",
            }}
            onClick={searchHandler}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.8)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.7)")
            }
            onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            Search
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "start",
          gap: "12px",
          padding: "8px",
          borderRadius: "10px",
          // backgroundColor: "#e5e7eb",
        }}
      >
        {list.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item.value)}
            onMouseOver={() => setHoveredButton(item.value)}
            onMouseOut={() => setHoveredButton(null)}
            style={{
              borderRadius: "8px",
              padding: "8px",
              fontWeight:
                selected === item.value || hoveredButton === item.value
                  ? "bold"
                  : "normal",
              backgroundColor:
                selected === item.value || hoveredButton === item.value
                  ? "#2563eb"
                  : "#9ca3af",
              color:
                selected === item.value || hoveredButton === item.value
                  ? "white"
                  : "inherit",
              borderColor:
                selected === item.value || hoveredButton === item.value
                  ? "white"
                  : "transparent",
              borderWidth:
                selected === item.value || hoveredButton === item.value
                  ? "2px"
                  : "0",
              borderStyle: "solid",
              transform:
                selected === item.value || hoveredButton === item.value
                  ? "scale(1.05)"
                  : "scale(1)",
              transition: "transform 200ms, font-weight 200ms",
            }}
          >
            {item.label}
          </button>
        ))}
        {userData?.menuSelected?.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item.value)}
            onMouseOver={() => setHoveredButton(item.value)}
            onMouseOut={() => setHoveredButton(null)}
            style={{
              borderRadius: "8px",
              padding: "8px",
              fontWeight: selected === item.value ? "bold" : "normal",
              backgroundColor:
                selected === item.value || hoveredButton === item.value
                  ? "#2563eb"
                  : "#9ca3af",
              color:
                selected === item.value || hoveredButton === item.value
                  ? "white"
                  : "inherit",
              borderColor:
                selected === item.value || hoveredButton === item.value
                  ? "white"
                  : "transparent",
              borderWidth:
                selected === item.value || hoveredButton === item.value
                  ? "2px"
                  : "0",
              borderStyle: "solid",
              transform:
                selected === item.value || hoveredButton === item.value
                  ? "scale(1.05)"
                  : "scale(1)",
              transition: "transform 200ms, font-weight 200ms",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const TaskTab = ({ fromPage, taskData, setTasks, tasks }) => {
  const primaryColor = "#4456FF";

  const initialInput = taskData || {
    title: "",
    description: "",
    assignedTo: "self",
    status: "pending",
    priority: "medium",
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // Default to current date + 2 days
  };

  const [taskInputData, setTaskInputData] = useState({ ...initialInput });
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setTaskInputData((prevData) => ({
      ...prevData,
      [id]: id === "dueDate" ? new Date(value) : value,
    }));
  };

  const titleInputRef = useRef(null);

  const postTask = async (task) => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const res = await _taskService.createTask({
      ...task,
      assignedTo: task.assignedTo === "self" ? userData._id : task.assignedTo,
    });
    if (res.statusCode === 200) {
      setTasks && setTasks([...tasks, res.data]);
      setTaskInputData({ ...initialInput });
    }
  };

  const updateTask = async (taskInputData) => {
    const res = await _taskService.updateTask(taskData?._id, taskInputData);
    if (res.statusCode === 200) {
      const updatedList = tasks.map((item) =>
        item._id === taskData?._id ? { ...item, ...taskInputData } : item
      );
      setTasks && setTasks(updatedList);
    }
  };

  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1a202c" }}>
          {taskData ? "Update Task" : "Add Task"}
        </h1>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: primaryColor,
            padding: "8px 16px",
            fontWeight: "600",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setIsAdvanceOpen(!isAdvanceOpen)}
        >
          Advance
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fromPage === "new"
            ? postTask(taskInputData)
            : updateTask(taskInputData);
        }}
        style={{ marginTop: "16px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="title" style={{ fontWeight: "500" }}>
              Title*
            </label>
            <input
              type="text"
              id="title"
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                padding: "8px",
              }}
              onChange={changeHandler}
              value={taskInputData.title}
              ref={titleInputRef}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="description" style={{ fontWeight: "500" }}>
              Description
            </label>
            <textarea
              id="description"
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                padding: "8px",
              }}
              onChange={changeHandler}
              value={taskInputData.description}
            />
          </div>
          {isAdvanceOpen && (
            <>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label htmlFor="assignedTo" style={{ fontWeight: "500" }}>
                  Assigned To
                </label>
                <input
                  type="text"
                  id="assignedTo"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "8px",
                  }}
                  onChange={changeHandler}
                  value={taskInputData.assignedTo}
                  disabled
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label htmlFor="status" style={{ fontWeight: "500" }}>
                  Status
                </label>
                <select
                  id="status"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "8px",
                  }}
                  onChange={changeHandler}
                  value={taskInputData.status}
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label htmlFor="priority" style={{ fontWeight: "500" }}>
                  Priority
                </label>
                <select
                  id="priority"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "8px",
                  }}
                  onChange={changeHandler}
                  value={taskInputData.priority}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="dueDate" style={{ fontWeight: "500" }}>
              Due Date
            </label>
            <input
              min={new Date().toISOString().split("T")[0]}
              value={
                taskInputData?.dueDate
                  ? new Date(taskInputData.dueDate).toISOString().split("T")[0]
                  : fromPage === "new"
                  ? new Date().toISOString().split("T")[0]
                  : ""
              }
              type="date"
              id="dueDate"
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                padding: "8px",
              }}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            style={{
              borderRadius: "8px",
              backgroundColor: primaryColor,
              padding: "12px",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {taskData ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [showComponent, setShowComponent] = useState({
    bookmark: false,
    text: false,
    url: false,
  });
  const [token, setToken] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const [user, setUser] = useState(null);
  const [inputData, setInputData] = useState("");
  const [menu, setMenu] = useState([]);
  const primaryColor = "#4456FF";
  const [selected, setSelected] = useState("journal");
  const [hoveredButton, setHoveredButton] = useState(null);

  const toggleComponent = (componentKey) => {
    setShowComponent((prevState) => ({
      ...prevState,
      [componentKey]: !prevState[componentKey],
      bookmark: componentKey === "bookmark" ? !prevState.bookmark : false,
      text: componentKey === "text" ? !prevState.text : false,
      url: componentKey === "url" ? !prevState.url : false,
    }));
  };

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      setCurrentTab(tabs[0].url);
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.get(["token"], (result) => {
      setToken(result.token);
    });
    chrome.storage.sync.get(["user"], (result) => {
      setUser(result.user);
      setMenu(result?.user?.menuSelected);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return token ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "400px",
        backgroundColor: "#f5f5f5",
        marginTop: "-10px",
        marginLeft: "-9px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          backgroundColor: primaryColor,
          position: "sticky",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        {/* <button
          style={{
            padding: "10px 20px",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: selected === "profile" ? "#fff" : primaryColor,
            color: selected === "profile" ? primaryColor : "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginTop: "-20px",
          }}
          onClick={() => setSelected("profile")}
        >
          Profile
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: selected === "journal" ? "#fff" : primaryColor,
            color: selected === "journal" ? primaryColor : "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginTop: "-20px",
          }}
          onClick={() => setSelected("journal")}
        >
          Journal
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: selected === "tasks" ? "#fff" : primaryColor,
            color: selected === "tasks" ? primaryColor : "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginTop: "-20px",
          }}
          onClick={() => setSelected("tasks")}
        >
          Tasks
        </button> */}

        {["profile", "journal", "tasks"].map((tab) => (
          <button
            key={tab}
            style={{
              padding: "10px 20px",
              borderBottomRightRadius: "20px",
              borderBottomLeftRadius: "20px",
              backgroundColor: selected === tab ? "#fff" : primaryColor,
              color: selected === tab ? primaryColor : "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              marginTop: "-20px",

              ...(hoveredButton === tab && selected !== tab
                ? { backgroundColor: "#fff", color: primaryColor }
                : {}),
            }}
            onClick={() => setSelected(tab)}
            onMouseEnter={() => setHoveredButton(tab)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {selected === "journal" && <JournalTab userData={user} />}
      {selected === "profile" && (
        <ProfileTab userData={user} setToken={setToken} />
      )}
      {selected === "tasks" && <TaskTab userData={user} />}

      <div
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          padding: "5px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: primaryColor,
          }}
        >
          <a
            href="https://www.soobati.com"
            target="_blank"
            style={{
              color: primaryColor,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Soobati AI
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Login getTokenFrom={setToken} />
  );
};

export default App;
