import React, { FC, ReactElement } from "react";

import styles from "./index.module.scss";
import { ListContent } from "./ListContent/ListContent";

export const ContentSide: FC = (): ReactElement =>
  <div className={styles.contentSide}>
    <ListContent />
  </div>
